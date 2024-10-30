import { ValidatorFn,ValidationErrors,AbstractControl } from "@angular/forms";



export const confirmpasswordvalidator:ValidatorFn=(
    control: AbstractControl
): ValidationErrors | null =>{
    return control.value.password === control.value.passwordconfirm ? null
    :{passwordmatch: true};
};