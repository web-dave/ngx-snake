import { TestDbService } from './utils/test.db.service';

const testDbService = new TestDbService();

describe('BaseTest', () => {
  // beforeEach(async () => {});

  it('clean db...', async () => {
    await testDbService.clearSchema();
  });

  it('clean and fill database with mock data...', async () => {
    await testDbService.cleanAndRebuildDb();
  });
});
