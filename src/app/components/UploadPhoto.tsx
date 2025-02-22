import React from 'react';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

interface UploadPhotoProps {
  fileNames: string[];
  onFileChange: (files: File[]) => void;
  onRemoveFile: (index: number) => void;
}

const UploadPhoto: React.FC<UploadPhotoProps> = ({
  onFileChange,
  fileNames,
  onRemoveFile,
}) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const filesArray = Array.from(event.target.files);
      onFileChange(filesArray);
      event.target.value = ''; // Чтобы можно было выбрать тот же файл снова
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
            <li
              key={index}
              className="flex items-center justify-between text-gray-700 border-b py-1"
            >
              {name}
              <IconButton
                size="small"
                color="error"
                onClick={() => onRemoveFile(index)}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UploadPhoto;
