import { Test, TestingModule } from '@nestjs/testing';
import { DreamsController } from './dreams.controller';

describe('DreamsController', () => {
  let controller: DreamsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DreamsController],
    }).compile();

    controller = module.get<DreamsController>(DreamsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
