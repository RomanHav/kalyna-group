export const formatRelativeDate = (dateString?: string) => {
  if (!dateString) return 'Unknown date';

  const postDate = new Date(dateString);
  const now = new Date();

  const diffTime = now.getTime() - postDate.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  const formattedTime = postDate.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });

  if (diffDays === 0) return `Today at ${formattedTime}`;

  // Если вчера
  if (diffDays === 1) return `Yesterday at ${formattedTime}`;

  if (diffDays > 7) {
    return postDate.toLocaleDateString('en-US', {
      day: '2-digit',
      month: 'short',
      ...(postDate.getFullYear() !== now.getFullYear() && {
        year: 'numeric',
      }),
    });
  }

  // Если посту 2-7 дней
  return `${diffDays} days ago at ${formattedTime}`;
};
