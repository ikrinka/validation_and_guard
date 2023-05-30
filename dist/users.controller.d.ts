import { UsersService } from './users.service';
import { User } from './user.model';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getAllUsers(): User[];
    getUserById(id: string): User;
    createUser(user: User): User;
}
