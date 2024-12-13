import Role from "./Role";
import Account from "./Account";

interface User {
  id: string;
  email: string;
  password: string;
  role: Role;
  Accounts: Account[];
}

export default User;
