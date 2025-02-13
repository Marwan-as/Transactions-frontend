export interface NavbarItem {
  href: string;
  icon: string;
  title: string;
}
export interface SidebarItem {
  href: string;
  icon: string;
  title: string;
}

export interface MutationArgs {
  endpoint: string;
  payload?: any | null;
  token?: string | null;
}

export interface ResponseInterface {
  message?: string | null;
  data?: any | null;
  errors?: any | null;
  status?: "Error" | "Success" | null;
}
