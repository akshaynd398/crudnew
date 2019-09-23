import { EmployeesModule } from './employees.module';
describe('EmployeesModule', function () {
    var employeesModule;
    beforeEach(function () {
        employeesModule = new EmployeesModule();
    });
    it('should create an instance', function () {
        expect(employeesModule).toBeTruthy();
    });
});
//# sourceMappingURL=employees.module.spec.js.map