import {IUserProfile} from '@frontend-sessions/models';

export enum PROFILE_UPDATE_PAGE {
  BASIC,
  CONTACT,
  COMPLETE
}

export class InitialUserProfile implements IUserProfile {
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
}
