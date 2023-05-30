import { User } from './user.model';
export declare class UsersService {
    private users;
    getAllUsers(): User[];
    getUserById(id: string): User | undefined;
    createUser(user: User): User;
}
