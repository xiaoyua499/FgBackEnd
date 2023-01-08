import { Test, TestingModule } from '@nestjs/testing';
import { ChitchatService } from './chitchat.service';

describe('ChitchatService', () => {
  let service: ChitchatService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChitchatService],
    }).compile();

    service = module.get<ChitchatService>(ChitchatService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
