// export interface IUserProfilePage {
//   name: string;
//   surname: string;
//   bloodGroup: string;
//   dateOfBirth: number;
//   phone: number;
//   sex: string;
//   email: string;
//   region: string;
// }

export interface IUserRegister {
  bloodTypeId: number;
  email: string;
  genderId: number;
  lastName: string;
  name: string;
  password: string;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserInfo {
  avatarUrl: string;
  email: string;
  firstName: string;
  id: number;
  lastName: string;
  role: string;
  token: string;
  tokenType: string;
}
