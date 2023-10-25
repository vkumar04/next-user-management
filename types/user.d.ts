enum Role {
  owner = "owner",
  farmer = "farmer",
  headGrower = "headGrower",
  grower = "grower",
}

export interface User {
  id: string;
  name: string;
  email: string;
  image: string | undefined;
  role?: Role;
}
