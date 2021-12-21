import { TestDbService } from './utils/test.db.service';

describe('BaseTest', () => {
  // beforeEach(async () => {});

  it('clean and fill database with mock data...', async () => {
    const testDbService = new TestDbService();
    await testDbService.cleanAndRebuildDb();
  });
});
