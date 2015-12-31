_.each(AccountsTemplates.atInputRendered, function(callback) {
  Template.atInput.onRendered(callback);
  Template.atHiddenInput.onRendered(callback);
});

// Override the templateName function in AccountsTemplates.atInputHelpers
AccountsTemplates.atInputHelpers.templateName = function() {
  if (this.template) {
    return this.template;
  }
  if (this.type === 'checkbox') {
    return 'atCheckboxInput';
  }

  if (this.type === 'select') {
    return 'atSelectInput';
  }

  if (this.type === 'radio') {
    return 'atRadioInput';
  }

  if (this.type === 'hidden') {
    return 'atHiddenInput';
  }

  if (this.type === 'password') {
    return 'atPasswordInput';
  }

  return 'atTextInput';
};
// Simply 'inherites' helpers from AccountsTemplates
Template.atInput.helpers(AccountsTemplates.atInputHelpers);

// Simply 'inherites' events from AccountsTemplates
Template.atInput.events(AccountsTemplates.atInputEvents);

// Simply 'inherites' helpers from AccountsTemplates
Template.atTextInput.helpers(AccountsTemplates.atInputHelpers);

// Simply 'inherites' helpers from AccountsTemplates
Template.atCheckboxInput.helpers(AccountsTemplates.atInputHelpers);

// Simply 'inherites' helpers from AccountsTemplates
Template.atSelectInput.helpers(AccountsTemplates.atInputHelpers);

// Simply 'inherites' helpers from AccountsTemplates
Template.atRadioInput.helpers(AccountsTemplates.atInputHelpers);

// Simply 'inherites' helpers from AccountsTemplates
Template.atHiddenInput.helpers(AccountsTemplates.atInputHelpers);

// Simply 'inherites' helpers from AccountsTemplates
Template.atPasswordInput.helpers(AccountsTemplates.atInputHelpers);
