import { model, Schema } from 'mongoose';

const clientSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: false,
    },
    selectOption: {
      type: String,
      required: true,
      enum: [
        'Landing Page',
        'E-Commerce',
        'UI/UX Design',
        'Business Website',
        'CRM System',
        '3D Design',
      ],
    },
    message: {
      type: String,
      required: false,
    },
    location: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const ClientsCollection = model('clients', clientSchema);
