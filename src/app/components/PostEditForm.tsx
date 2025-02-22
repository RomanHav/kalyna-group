import { Field, Form, Formik } from 'formik';
import Image from 'next/image';
import { GoPlus } from 'react-icons/go';
import { Box, TextField } from '@mui/material';
import { MdOutlineCancel, MdOutlineDone } from 'react-icons/md';
import React, { useState } from 'react';
import * as Yup from 'yup';
import { fetchPosts, updatePost } from '@/app/redux/posts/operations';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/app/redux/store';

interface CardProps {
  id?: string;
  images: string[];
  description: string;
  link: string;
}

interface initialValues {
  images: File[];
  link: string;
  description: string;
}

interface PostEditProps {
  post: CardProps;
  onUpdatePost: () => void;
  onEdit: () => void;
}

const PostEditForm: React.FC<PostEditProps> = ({
  post,
  onEdit,
  onUpdatePost,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const [files, setFiles] = useState<File[]>([]);
  const [removedImages, setRemovedImages] = useState<string[]>([]);

  const initialValues: initialValues = {
    images: [],
    description: post.description,
    link: post.link,
  };

  const validationSchema = Yup.object({
    description: Yup.string().required('Description is required'),
    link: Yup.string().url('Invalid URL').required('Link is required'),
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const newFiles = Array.from(event.target.files);

      // Фильтруем дубликаты
      const filteredFiles = newFiles.filter(
        newFile =>
          !files.some(existingFile => existingFile.name === newFile.name)
      );

      setFiles([...files, ...filteredFiles]);
    }
  };

  const handleRemoveImage = (image: string) => {
    if (!removedImages.includes(image)) {
      setRemovedImages(prev => [...prev, image]);
    }
  };

  const handleUpdate = async values => {
    try {
      await dispatch(
        updatePost({
          id: post.id,
          images: files,
          removedImages,
          description: values.description,
          link: values.link,
        })
      );
      onUpdatePost();
      dispatch(fetchPosts());
    } catch (error) {
      console.error('Update error', error);
    }
  };

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={handleUpdate}
    >
      {({ values, handleChange }) => (
        <Form className="flex flex-col w-full gap-5 items-end">
          <div className="grid grid-cols-3 gap-2">
            {post.images
              .filter(img => !removedImages.includes(img))
              .map((image, index) => (
                <button
                  key={index}
                  type="button"
                  className="relative rounded w-20 h-20"
                  onClick={() => handleRemoveImage(image)}
                >
                  <div className="absolute w-full h-full z-20 rounded transition-all duration-300 opacity-0 hover:opacity-100 flex justify-center items-center bg-teal-600/70">
                    <MdOutlineCancel size={32} color="#FFFFFF" />
                  </div>
                  <Image
                    src={image}
                    alt="Post Image"
                    className="rounded w-20 h-20 object-cover"
                    width={400}
                    height={400}
                  />
                </button>
              ))}

            {files.map((file, index) => (
              <button
                key={index}
                className="relative rounded w-20 h-20"
                onClick={() => setFiles(files.filter((_, i) => i !== index))}
              >
                <div className="absolute transition-all duration-300 opacity-0 hover:opacity-100 w-full h-full z-20 rounded flex justify-center items-center bg-teal-600/70">
                  <MdOutlineCancel size={32} color="#FFFFFF" />
                </div>
                <Image
                  src={URL.createObjectURL(file)}
                  alt={file.name}
                  className="rounded w-20 h-20 object-cover"
                  width={400}
                  height={400}
                />
              </button>
            ))}

            <button
              type="button"
              className="relative cursor-pointer bg-teal-600 rounded flex justify-center items-center w-20 h-20"
            >
              <GoPlus size={40} color="#fff" />
              <input
                className="absolute cursor-pointer z-50 w-full h-full opacity-0"
                type="file"
                multiple
                onChange={handleFileChange}
              />
            </button>
          </div>
          <div className={'flex flex-col gap-5 w-full'}>
            <Box>
              <Field
                as={TextField}
                name="link"
                label="Link"
                fullWidth
                value={values.link}
                onChange={handleChange}
              />
            </Box>
            <Box>
              <Field
                as={TextField}
                fullWidth
                rows={4}
                multiline
                name="description"
                label="Description"
                value={values.description}
                onChange={handleChange}
              />
            </Box>
          </div>
          <div className="flex gap-1">
            <button
              type="submit"
              className="rounded-full bg-transparent transition-all duration-300 hover:bg-[#E6E6E6] p-2"
            >
              <MdOutlineDone size={32} color="#1B3431" />
            </button>
            <button
              type="button"
              className="rounded-full bg-transparent transition-all duration-300 hover:bg-[#E6E6E6] p-2"
              onClick={onEdit}
            >
              <MdOutlineCancel size={32} color="#FF5151" />
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default PostEditForm;
