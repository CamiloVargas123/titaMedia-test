export interface ApiUser {
  given_name?: string;
  family_name?: string;
  nickname: string;
  name: string;
  picture: string;
  locale: string;
  updated_at: Date;
  email: string;
  email_verified: boolean;
  sub: string;
}
export interface User {
  given_name?: string;
  family_name?: string;
  nickname: string;
  name: string;
  email: string;
  email_verified: boolean;
  picture: string;
}

export const UserEmptyState: User = {
  given_name: '',
  family_name: '',
  nickname: '',
  name: '',
  email: '',
  email_verified: false,
  picture: ''
};
