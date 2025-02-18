import React from 'react';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Button from '@mui/material/Button';

interface UploadPhotoProps {
  fileNames: string[];
  onFileChange: (files: File[]) => void;
}

const UploadPhoto: React.FC<UploadPhotoProps> = ({
  onFileChange,
  fileNames,
}) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const filesArray = Array.from(event.target.files);
      onFileChange(filesArray);
    }
  };

  return (
    <div className="flex flex-col">
      <Button
        component="label"
        variant="contained"
        startIcon={<CloudUploadIcon />}
      >
        Upload Images
        <input type="file" multiple hidden onChange={handleFileChange} />
      </Button>
      {fileNames.length > 0 && (
        <ul className="mt-2">
          {fileNames.map((name, index) => (
            <li key={index} className="text-gray-700">
              {name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UploadPhoto;
