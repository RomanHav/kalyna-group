import { useState } from 'react';
import { useTransition, animated } from '@react-spring/web';

interface Item {
    id: number;
    content: string;
}

const PushToFirst: React.FC = () => {
    const [items, setItems] = useState<Item[]>([
        { id: 1, content: 'Block 1' },
        { id: 2, content: 'Block 2' },
        { id: 3, content: 'Block 3' },
        { id: 4, content: 'Block 4' },
    ]);

    const handleClick = (id: number) => {
        const clickedItem = items.find((item) => item.id === id);
        const otherItems = items.filter((item) => item.id !== id);
        if (clickedItem) {
            setItems([clickedItem, ...otherItems]);
        }
    };

    const transitions = useTransition(items, {
        from: { transform: 'translate3d(0,0,0)', opacity: 0 },
        enter: (item, index) => ({
            transform: `translate3d(${index * 120}px, 0, 0)`,
            opacity: 1,
        }),
        update: (item, index) => ({
            transform: `translate3d(${index * 120}px, 0, 0)`,
            opacity: 1,
        }),
        leave: { transform: 'translate3d(0,0,0)', opacity: 0 },
        keys: (item) => item.id,
    });

    return (
        <div style={{ position: 'relative', width: '500px', height: '100px' }}>
            {transitions((style, item) => (
                <animated.div
                    key={item.id}
                    style={{
                        ...style,
                        position: 'absolute',
                        width: '100px',
                        height: '100px',
                        backgroundColor: '#f0f0f0',
                        border: '1px solid #ccc',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        cursor: 'pointer',
                    }}
                    onClick={() => handleClick(item.id)}
                >
                    {item.content}
                </animated.div>
            ))}
        </div>
    );
};

export default PushToFirst;
