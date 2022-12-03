import { z } from 'zod';

import { requiredFields, invalidEmail } from 'lib/errorMessage';

const userEmail = {
  userEmail: z
    .string()
    .min(1, { message: requiredFields })
    .email({ message: invalidEmail }),
};

const userName = {
  userName: z.string().min(1, { message: requiredFields }),
};

const message = {
  message: z.string().min(1, { message: requiredFields }),
};

// お問い合わせフォームのスキーマ
const contactSchema = z.object({
  ...userEmail,
  ...userName,
  ...message,
});
type ContactSchema = z.infer<typeof contactSchema>;

export { userEmail, userName, message, contactSchema };
export type { ContactSchema };
