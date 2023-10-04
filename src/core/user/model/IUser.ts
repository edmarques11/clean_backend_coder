export default interface IUser {
  id?: number;
  name: string;
  email: string;
  password: string;
  created_at?: Date;
  update_at?: Date;
}
