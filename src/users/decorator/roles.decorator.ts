import { SetMetadata } from '@nestjs/common';
import { Role } from 'src/roles/roles.enum';

export const role_key = 'roles';

export const RoleDec = (...roles: Role[]) => SetMetadata(role_key, roles);
