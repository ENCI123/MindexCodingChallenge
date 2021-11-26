import { InMemoryDbService } from "angular-in-memory-web-api";

export class BackendlessMockService implements InMemoryDbService {
  createDb() {
    const employees = [
      {
        id: 1,
        firstName: "Brian",
        lastName: "McGee",
        position: "CEO",
        directReports: [2, 3],
        compensation: 1000000,
      },
      {
        id: 2,
        firstName: "Homer",
        lastName: "Thompson",
        position: "Dev Manager",
        directReports: [4],
        compensation: 200000,
      },
      {
        id: 3,
        firstName: "Rock",
        lastName: "Strongo",
        position: "Lead Tester",
        compensation: 300000,
      },
      {
        id: 4,
        firstName: "Max",
        lastName: "Power",
        position: "Junior Software Engineer",
        compensation: 4000000,
      },
    ];
    return { employees };
  }
}
