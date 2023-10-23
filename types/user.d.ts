enum Role {
  admin = "admin",
  farmer = "farmer",
  headGrower = "headGrower",
  grower = "grower",
}

export interface userProfileInterface {
  email: string;
  password: string;
  role: Role;
  //   firstName?: string;
  //   lastName?: string;
  //   phone?: string;
}
