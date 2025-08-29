export type Guest = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone?: string | null;
  address?: string | null;
  date_of_birth?: string | null;  // ISO string
  created?: string;
};
