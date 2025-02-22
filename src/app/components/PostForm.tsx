import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, fetchPosts } from '@/app/redux/posts/operations';
import { selectLoading, selectError } from '@/app/redux/posts/selectors';
import { AppDispatch } from '@/app/redux/store';
import { Box, TextField } from '@mui/material';
import UploadPhoto from './UploadPhoto';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { PacmanLoader } from 'react-spinners';

const validationSchema = Yup.object({
  description: Yup.string().required('Description is required'),
  images: Yup.array().min(1, 'At least one image is required'),
  link: Yup.string()
    .required('Link is required')
    .min(5, 'At least linkedin link is required'),
});

const PostForm: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [fileNames, setFileNames] = useState<string[]>([]);

  const handleFileChange = (newFiles: File[]) => {
    setSelectedFiles(prevFiles => [...prevFiles, ...newFiles]);
    setFileNames(prevNames => [
      ...prevNames,
      ...newFiles.map(file => file.name),
    ]);
  };

  const handleRemoveFile = (index: number) => {
    const updatedFiles = selectedFiles.filter((_, i) => i !== index);
    setSelectedFiles(updatedFiles);
    setFileNames(updatedFiles.map(file => file.name));
  };

  return (
    <Formik
      initialValues={{ description: '', images: [], link: '' }}
      validationSchema={validationSchema}
      onSubmit={async (values, { resetForm }) => {
        await dispatch(
          createPost({
            images: selectedFiles,
            description: values.description,
            link: values.link,
          })
        );
        dispatch(fetchPosts());
        setSelectedFiles([]);
        setFileNames([]);
        resetForm();
      }}
    >
      {({ setFieldValue }) => (
        <Form
          encType={'multipart/form-data'}
          className="flex flex-col gap-4 mt-6"
        >
          <UploadPhoto
            fileNames={fileNames}
            onFileChange={files => {
              handleFileChange(files);
              setFieldValue('images', files);
            }}
            onRemoveFile={handleRemoveFile}
          />

          <Box>
            <Field
              as={TextField}
              name="description"
              label="Post Description"
              multiline
              rows={4}
              fullWidth
            />
            <ErrorMessage
              name="description"
              component="p"
              className="text-red-500"
            />
          </Box>
          <Box>
            <Field as={TextField} name="link" label="Post Link" fullWidth />
            <ErrorMessage name="link" component="p" className="text-red-500" />
          </Box>
          {error && <p className="text-red-500">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className={`tracking-wider flex items-center justify-center text-xl font-semibold border border-custom-background bg-custom-background text-white transition-colors duration-300 hover:bg-white py-2 px-6 uppercase hover:text-black hover:border-black rounded`}
          >
            {loading ? (
              <PacmanLoader size={24} color={'#FFFFFF'} />
            ) : (
              'Publish Post'
            )}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default PostForm;
