// Simply 'inherites' rendered callback from AccountsTemplates
Template.atReCaptcha.onRendered(AccountsTemplates.atReCaptchaRendered);

// Simply 'inherites' helpers from AccountsTemplates
Template.atReCaptcha.helpers(AccountsTemplates.atReCaptchaHelpers);
