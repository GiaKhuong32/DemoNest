import { Test, TestingModule } from '@nestjs/testing';
import { AccountBaseUseCaseService } from './base-use-case.service';

describe('BaseUseCaseService', () => {
  let service: AccountBaseUseCaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccountBaseUseCaseService],
    }).compile();

    service = module.get<AccountBaseUseCaseService>(AccountBaseUseCaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
