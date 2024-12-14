import Role from "./Role";
import Account from "./Account";

interface User {
  id: string;
  email: string;
  password: string;
  role: Role;
  accounts: Account[];
}

export default User;
