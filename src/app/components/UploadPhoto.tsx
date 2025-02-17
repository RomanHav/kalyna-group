import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Button from '@mui/material/Button';
import React, { useState } from 'react';
import { styled } from '@mui/material/styles';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const UploadPhoto = () => {
  const [name, setName] = useState<string[]>([]);
  const handleAddImage = (e)=>{
      setName([...name, e.target.files])
      console.log(name)
  };

  return (
    <div className={`flex flex-col`}>
      <Button
        component="label"
        role={undefined}
        variant="contained"
        tabIndex={-1}
        startIcon={<CloudUploadIcon />}
      >
        Upload files
        <VisuallyHiddenInput
          type="file"
          onChange={handleAddImage}
          multiple
        />
      </Button>
      <ul>{}</ul>
    </div>
  );
};

export default UploadPhoto;
