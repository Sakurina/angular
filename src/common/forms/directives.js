'use strict';"use strict";
var ng_control_name_1 = require('./directives/ng_control_name');
var ng_form_control_1 = require('./directives/ng_form_control');
var ng_model_1 = require('./directives/ng_model');
var ng_control_group_1 = require('./directives/ng_control_group');
var ng_form_model_1 = require('./directives/ng_form_model');
var ng_form_1 = require('./directives/ng_form');
var default_value_accessor_1 = require('./directives/default_value_accessor');
var checkbox_value_accessor_1 = require('./directives/checkbox_value_accessor');
var number_value_accessor_1 = require('./directives/number_value_accessor');
var radio_control_value_accessor_1 = require('./directives/radio_control_value_accessor');
var ng_control_status_1 = require('./directives/ng_control_status');
var select_control_value_accessor_1 = require('./directives/select_control_value_accessor');
var validators_1 = require('./directives/validators');
var ng_control_name_2 = require('./directives/ng_control_name');
exports.NgControlName = ng_control_name_2.NgControlName;
var ng_form_control_2 = require('./directives/ng_form_control');
exports.NgFormControl = ng_form_control_2.NgFormControl;
var ng_model_2 = require('./directives/ng_model');
exports.NgModel = ng_model_2.NgModel;
var ng_control_group_2 = require('./directives/ng_control_group');
exports.NgControlGroup = ng_control_group_2.NgControlGroup;
var ng_form_model_2 = require('./directives/ng_form_model');
exports.NgFormModel = ng_form_model_2.NgFormModel;
var ng_form_2 = require('./directives/ng_form');
exports.NgForm = ng_form_2.NgForm;
var default_value_accessor_2 = require('./directives/default_value_accessor');
exports.DefaultValueAccessor = default_value_accessor_2.DefaultValueAccessor;
var checkbox_value_accessor_2 = require('./directives/checkbox_value_accessor');
exports.CheckboxControlValueAccessor = checkbox_value_accessor_2.CheckboxControlValueAccessor;
var radio_control_value_accessor_2 = require('./directives/radio_control_value_accessor');
exports.RadioControlValueAccessor = radio_control_value_accessor_2.RadioControlValueAccessor;
exports.RadioButtonState = radio_control_value_accessor_2.RadioButtonState;
var number_value_accessor_2 = require('./directives/number_value_accessor');
exports.NumberValueAccessor = number_value_accessor_2.NumberValueAccessor;
var ng_control_status_2 = require('./directives/ng_control_status');
exports.NgControlStatus = ng_control_status_2.NgControlStatus;
var select_control_value_accessor_2 = require('./directives/select_control_value_accessor');
exports.SelectControlValueAccessor = select_control_value_accessor_2.SelectControlValueAccessor;
exports.NgSelectOption = select_control_value_accessor_2.NgSelectOption;
var validators_2 = require('./directives/validators');
exports.RequiredValidator = validators_2.RequiredValidator;
exports.MinLengthValidator = validators_2.MinLengthValidator;
exports.MaxLengthValidator = validators_2.MaxLengthValidator;
exports.PatternValidator = validators_2.PatternValidator;
var ng_control_1 = require('./directives/ng_control');
exports.NgControl = ng_control_1.NgControl;
/**
 *
 * A list of all the form directives used as part of a `@Component` annotation.
 *
 *  This is a shorthand for importing them each individually.
 *
 * ### Example
 *
 * ```typescript
 * @Component({
 *   selector: 'my-app',
 *   directives: [FORM_DIRECTIVES]
 * })
 * class MyApp {}
 * ```
 */
exports.FORM_DIRECTIVES = [
    ng_control_name_1.NgControlName,
    ng_control_group_1.NgControlGroup,
    ng_form_control_1.NgFormControl,
    ng_model_1.NgModel,
    ng_form_model_1.NgFormModel,
    ng_form_1.NgForm,
    select_control_value_accessor_1.NgSelectOption,
    default_value_accessor_1.DefaultValueAccessor,
    number_value_accessor_1.NumberValueAccessor,
    checkbox_value_accessor_1.CheckboxControlValueAccessor,
    select_control_value_accessor_1.SelectControlValueAccessor,
    radio_control_value_accessor_1.RadioControlValueAccessor,
    ng_control_status_1.NgControlStatus,
    validators_1.RequiredValidator,
    validators_1.MinLengthValidator,
    validators_1.MaxLengthValidator,
    validators_1.PatternValidator
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpZmZpbmdfcGx1Z2luX3dyYXBwZXItb3V0cHV0X3BhdGgtZ2M0Y3FkN3EudG1wL2FuZ3VsYXIyL3NyYy9jb21tb24vZm9ybXMvZGlyZWN0aXZlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsZ0NBQTRCLDhCQUE4QixDQUFDLENBQUE7QUFDM0QsZ0NBQTRCLDhCQUE4QixDQUFDLENBQUE7QUFDM0QseUJBQXNCLHVCQUF1QixDQUFDLENBQUE7QUFDOUMsaUNBQTZCLCtCQUErQixDQUFDLENBQUE7QUFDN0QsOEJBQTBCLDRCQUE0QixDQUFDLENBQUE7QUFDdkQsd0JBQXFCLHNCQUFzQixDQUFDLENBQUE7QUFDNUMsdUNBQW1DLHFDQUFxQyxDQUFDLENBQUE7QUFDekUsd0NBQTJDLHNDQUFzQyxDQUFDLENBQUE7QUFDbEYsc0NBQWtDLG9DQUFvQyxDQUFDLENBQUE7QUFDdkUsNkNBQXdDLDJDQUEyQyxDQUFDLENBQUE7QUFDcEYsa0NBQThCLGdDQUFnQyxDQUFDLENBQUE7QUFDL0QsOENBR08sNENBQTRDLENBQUMsQ0FBQTtBQUNwRCwyQkFLTyx5QkFBeUIsQ0FBQyxDQUFBO0FBRWpDLGdDQUE0Qiw4QkFBOEIsQ0FBQztBQUFuRCx3REFBbUQ7QUFDM0QsZ0NBQTRCLDhCQUE4QixDQUFDO0FBQW5ELHdEQUFtRDtBQUMzRCx5QkFBc0IsdUJBQXVCLENBQUM7QUFBdEMscUNBQXNDO0FBQzlDLGlDQUE2QiwrQkFBK0IsQ0FBQztBQUFyRCwyREFBcUQ7QUFDN0QsOEJBQTBCLDRCQUE0QixDQUFDO0FBQS9DLGtEQUErQztBQUN2RCx3QkFBcUIsc0JBQXNCLENBQUM7QUFBcEMsa0NBQW9DO0FBQzVDLHVDQUFtQyxxQ0FBcUMsQ0FBQztBQUFqRSw2RUFBaUU7QUFDekUsd0NBQTJDLHNDQUFzQyxDQUFDO0FBQTFFLDhGQUEwRTtBQUNsRiw2Q0FHTywyQ0FBMkMsQ0FBQztBQUZqRCw2RkFBeUI7QUFDekIsMkVBQ2lEO0FBQ25ELHNDQUFrQyxvQ0FBb0MsQ0FBQztBQUEvRCwwRUFBK0Q7QUFDdkUsa0NBQThCLGdDQUFnQyxDQUFDO0FBQXZELDhEQUF1RDtBQUMvRCw4Q0FHTyw0Q0FBNEMsQ0FBQztBQUZsRCxnR0FBMEI7QUFDMUIsd0VBQ2tEO0FBQ3BELDJCQUtPLHlCQUF5QixDQUFDO0FBSi9CLDJEQUFpQjtBQUNqQiw2REFBa0I7QUFDbEIsNkRBQWtCO0FBQ2xCLHlEQUMrQjtBQUNqQywyQkFBd0IseUJBQXlCLENBQUM7QUFBMUMsMkNBQTBDO0FBR2xEOzs7Ozs7Ozs7Ozs7Ozs7R0FlRztBQUNVLHVCQUFlLEdBQTZCO0lBQ3ZELCtCQUFhO0lBQ2IsaUNBQWM7SUFFZCwrQkFBYTtJQUNiLGtCQUFPO0lBQ1AsMkJBQVc7SUFDWCxnQkFBTTtJQUVOLDhDQUFjO0lBQ2QsNkNBQW9CO0lBQ3BCLDJDQUFtQjtJQUNuQixzREFBNEI7SUFDNUIsMERBQTBCO0lBQzFCLHdEQUF5QjtJQUN6QixtQ0FBZTtJQUVmLDhCQUFpQjtJQUNqQiwrQkFBa0I7SUFDbEIsK0JBQWtCO0lBQ2xCLDZCQUFnQjtDQUNqQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtUeXBlfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2xhbmcnO1xuaW1wb3J0IHtOZ0NvbnRyb2xOYW1lfSBmcm9tICcuL2RpcmVjdGl2ZXMvbmdfY29udHJvbF9uYW1lJztcbmltcG9ydCB7TmdGb3JtQ29udHJvbH0gZnJvbSAnLi9kaXJlY3RpdmVzL25nX2Zvcm1fY29udHJvbCc7XG5pbXBvcnQge05nTW9kZWx9IGZyb20gJy4vZGlyZWN0aXZlcy9uZ19tb2RlbCc7XG5pbXBvcnQge05nQ29udHJvbEdyb3VwfSBmcm9tICcuL2RpcmVjdGl2ZXMvbmdfY29udHJvbF9ncm91cCc7XG5pbXBvcnQge05nRm9ybU1vZGVsfSBmcm9tICcuL2RpcmVjdGl2ZXMvbmdfZm9ybV9tb2RlbCc7XG5pbXBvcnQge05nRm9ybX0gZnJvbSAnLi9kaXJlY3RpdmVzL25nX2Zvcm0nO1xuaW1wb3J0IHtEZWZhdWx0VmFsdWVBY2Nlc3Nvcn0gZnJvbSAnLi9kaXJlY3RpdmVzL2RlZmF1bHRfdmFsdWVfYWNjZXNzb3InO1xuaW1wb3J0IHtDaGVja2JveENvbnRyb2xWYWx1ZUFjY2Vzc29yfSBmcm9tICcuL2RpcmVjdGl2ZXMvY2hlY2tib3hfdmFsdWVfYWNjZXNzb3InO1xuaW1wb3J0IHtOdW1iZXJWYWx1ZUFjY2Vzc29yfSBmcm9tICcuL2RpcmVjdGl2ZXMvbnVtYmVyX3ZhbHVlX2FjY2Vzc29yJztcbmltcG9ydCB7UmFkaW9Db250cm9sVmFsdWVBY2Nlc3Nvcn0gZnJvbSAnLi9kaXJlY3RpdmVzL3JhZGlvX2NvbnRyb2xfdmFsdWVfYWNjZXNzb3InO1xuaW1wb3J0IHtOZ0NvbnRyb2xTdGF0dXN9IGZyb20gJy4vZGlyZWN0aXZlcy9uZ19jb250cm9sX3N0YXR1cyc7XG5pbXBvcnQge1xuICBTZWxlY3RDb250cm9sVmFsdWVBY2Nlc3NvcixcbiAgTmdTZWxlY3RPcHRpb25cbn0gZnJvbSAnLi9kaXJlY3RpdmVzL3NlbGVjdF9jb250cm9sX3ZhbHVlX2FjY2Vzc29yJztcbmltcG9ydCB7XG4gIFJlcXVpcmVkVmFsaWRhdG9yLFxuICBNaW5MZW5ndGhWYWxpZGF0b3IsXG4gIE1heExlbmd0aFZhbGlkYXRvcixcbiAgUGF0dGVyblZhbGlkYXRvclxufSBmcm9tICcuL2RpcmVjdGl2ZXMvdmFsaWRhdG9ycyc7XG5cbmV4cG9ydCB7TmdDb250cm9sTmFtZX0gZnJvbSAnLi9kaXJlY3RpdmVzL25nX2NvbnRyb2xfbmFtZSc7XG5leHBvcnQge05nRm9ybUNvbnRyb2x9IGZyb20gJy4vZGlyZWN0aXZlcy9uZ19mb3JtX2NvbnRyb2wnO1xuZXhwb3J0IHtOZ01vZGVsfSBmcm9tICcuL2RpcmVjdGl2ZXMvbmdfbW9kZWwnO1xuZXhwb3J0IHtOZ0NvbnRyb2xHcm91cH0gZnJvbSAnLi9kaXJlY3RpdmVzL25nX2NvbnRyb2xfZ3JvdXAnO1xuZXhwb3J0IHtOZ0Zvcm1Nb2RlbH0gZnJvbSAnLi9kaXJlY3RpdmVzL25nX2Zvcm1fbW9kZWwnO1xuZXhwb3J0IHtOZ0Zvcm19IGZyb20gJy4vZGlyZWN0aXZlcy9uZ19mb3JtJztcbmV4cG9ydCB7RGVmYXVsdFZhbHVlQWNjZXNzb3J9IGZyb20gJy4vZGlyZWN0aXZlcy9kZWZhdWx0X3ZhbHVlX2FjY2Vzc29yJztcbmV4cG9ydCB7Q2hlY2tib3hDb250cm9sVmFsdWVBY2Nlc3Nvcn0gZnJvbSAnLi9kaXJlY3RpdmVzL2NoZWNrYm94X3ZhbHVlX2FjY2Vzc29yJztcbmV4cG9ydCB7XG4gIFJhZGlvQ29udHJvbFZhbHVlQWNjZXNzb3IsXG4gIFJhZGlvQnV0dG9uU3RhdGVcbn0gZnJvbSAnLi9kaXJlY3RpdmVzL3JhZGlvX2NvbnRyb2xfdmFsdWVfYWNjZXNzb3InO1xuZXhwb3J0IHtOdW1iZXJWYWx1ZUFjY2Vzc29yfSBmcm9tICcuL2RpcmVjdGl2ZXMvbnVtYmVyX3ZhbHVlX2FjY2Vzc29yJztcbmV4cG9ydCB7TmdDb250cm9sU3RhdHVzfSBmcm9tICcuL2RpcmVjdGl2ZXMvbmdfY29udHJvbF9zdGF0dXMnO1xuZXhwb3J0IHtcbiAgU2VsZWN0Q29udHJvbFZhbHVlQWNjZXNzb3IsXG4gIE5nU2VsZWN0T3B0aW9uXG59IGZyb20gJy4vZGlyZWN0aXZlcy9zZWxlY3RfY29udHJvbF92YWx1ZV9hY2Nlc3Nvcic7XG5leHBvcnQge1xuICBSZXF1aXJlZFZhbGlkYXRvcixcbiAgTWluTGVuZ3RoVmFsaWRhdG9yLFxuICBNYXhMZW5ndGhWYWxpZGF0b3IsXG4gIFBhdHRlcm5WYWxpZGF0b3Jcbn0gZnJvbSAnLi9kaXJlY3RpdmVzL3ZhbGlkYXRvcnMnO1xuZXhwb3J0IHtOZ0NvbnRyb2x9IGZyb20gJy4vZGlyZWN0aXZlcy9uZ19jb250cm9sJztcbmV4cG9ydCB7Q29udHJvbFZhbHVlQWNjZXNzb3J9IGZyb20gJy4vZGlyZWN0aXZlcy9jb250cm9sX3ZhbHVlX2FjY2Vzc29yJztcblxuLyoqXG4gKlxuICogQSBsaXN0IG9mIGFsbCB0aGUgZm9ybSBkaXJlY3RpdmVzIHVzZWQgYXMgcGFydCBvZiBhIGBAQ29tcG9uZW50YCBhbm5vdGF0aW9uLlxuICpcbiAqICBUaGlzIGlzIGEgc2hvcnRoYW5kIGZvciBpbXBvcnRpbmcgdGhlbSBlYWNoIGluZGl2aWR1YWxseS5cbiAqXG4gKiAjIyMgRXhhbXBsZVxuICpcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIEBDb21wb25lbnQoe1xuICogICBzZWxlY3RvcjogJ215LWFwcCcsXG4gKiAgIGRpcmVjdGl2ZXM6IFtGT1JNX0RJUkVDVElWRVNdXG4gKiB9KVxuICogY2xhc3MgTXlBcHAge31cbiAqIGBgYFxuICovXG5leHBvcnQgY29uc3QgRk9STV9ESVJFQ1RJVkVTOiBUeXBlW10gPSAvKkB0czJkYXJ0X2NvbnN0Ki9bXG4gIE5nQ29udHJvbE5hbWUsXG4gIE5nQ29udHJvbEdyb3VwLFxuXG4gIE5nRm9ybUNvbnRyb2wsXG4gIE5nTW9kZWwsXG4gIE5nRm9ybU1vZGVsLFxuICBOZ0Zvcm0sXG5cbiAgTmdTZWxlY3RPcHRpb24sXG4gIERlZmF1bHRWYWx1ZUFjY2Vzc29yLFxuICBOdW1iZXJWYWx1ZUFjY2Vzc29yLFxuICBDaGVja2JveENvbnRyb2xWYWx1ZUFjY2Vzc29yLFxuICBTZWxlY3RDb250cm9sVmFsdWVBY2Nlc3NvcixcbiAgUmFkaW9Db250cm9sVmFsdWVBY2Nlc3NvcixcbiAgTmdDb250cm9sU3RhdHVzLFxuXG4gIFJlcXVpcmVkVmFsaWRhdG9yLFxuICBNaW5MZW5ndGhWYWxpZGF0b3IsXG4gIE1heExlbmd0aFZhbGlkYXRvcixcbiAgUGF0dGVyblZhbGlkYXRvclxuXTtcbiJdfQ==