// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportCompany from '../../../app/controller/company';
import ExportUser from '../../../app/controller/user';

declare module 'egg' {
  interface IController {
    company: ExportCompany;
    user: ExportUser;
  }
}
