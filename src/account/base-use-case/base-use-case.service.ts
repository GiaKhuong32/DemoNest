import { Injectable } from "@nestjs/common";
import { AccountDomain, AccountUseCase, ErrorAccountException } from "../../domain/account.domain";
import { InMemRepositoryService } from "../in-mem-repository/in-mem-repository.service";

@Injectable()
export class AccountBaseUseCaseService implements AccountUseCase {
  constructor(private accountRepository: InMemRepositoryService) {
  }

  getAccount(): AccountDomain[] {
    return this.accountRepository.getAccount();
  }

  getAccountById(id: number): AccountDomain {
    return this.accountRepository.getAccountById(id);
  }

  createAccount(account: AccountDomain) {
    let exicetAccount = ErrorAccountException;
    // if (exicetAccount != null || exicetAccount != undefined) {
    //   throw new ErrorAccountException();
    // }
    this.accountRepository.createAccount(account);
  }

  updateAccount(account: AccountDomain) {
    this.accountRepository.updateAccount(account);
  }

  deleteAccount(id: number) {
    this.accountRepository.deleteAccount(id);
  }
}
