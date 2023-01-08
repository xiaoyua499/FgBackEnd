import { Test, TestingModule } from '@nestjs/testing';
import { ChitchatController } from './chitchat.controller';
import { ChitchatService } from './chitchat.service';

describe('ChitchatController', () => {
  let controller: ChitchatController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChitchatController],
      providers: [ChitchatService],
    }).compile();

    controller = module.get<ChitchatController>(ChitchatController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
