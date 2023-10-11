// Placeholder.
// PRIORITY 1.
// Need to take an email and parse it, then create a set of entity-relationships.
// The first use case (critical) is for an email to be sent to a support address and it create:

// - A message 
// - A task (class = 'ticket') 
// - A message-task relationship 
// - A task-bizmodule relationship (just set the 'ticket' entity category field to the 'projects' category for the time being

// Then we will also do this:
// - Create the Contact for the email sender if doesn't exist
// - Relationship to the email sender
// - Link the recipient (the support mailbox - i.e. the email address )

// Then implement extra features: 
// - Link a 'member' contact entity as 'assigned'
// - Implement email parsing to get informaiton out of the body and put it in entity/relationship fields
// - Auto link people that are 'watching' that email connector (and later, allow people to more granularly 'watch' certain customer domains etc.)
  

////////////////////////
// For orgmenta: We will send emails using our connected MS account
// For clients: We will initially allow them to sign up with their MS account and do the same.
// Future: We will add other email provider such as SendGrid.

export type EmailServiceInfo = {
  // Add properties here, for example:
  url: string;
};

export const mapEmailServices: Record<string, EmailServiceInfo> = {
  "Mailgun": { url: "https://www.mailgun.com/" },
  "Amazon SES": { url: "https://aws.amazon.com/ses/" },
  "Postmark": { url: "https://postmarkapp.com/" },
  "Mailchimp Transactional Email": { url: "https://mailchimp.com/developer/transactional/" },
  "SparkPost": { url: "https://www.sparkpost.com/" },
  "SendinBlue": { url: "https://www.sendinblue.com/" },
  "SMTP2GO": { url: "https://www.smtp2go.com/" },
  "Elastic Email": { url: "https://elasticemail.com/" },
  "Moosend": { url: "https://moosend.com/" },
  "Pepipost": { url: "https://www.pepipost.com/" }
}; 

export const arrayEmailServices: string[] = Object.keys(mapEmailServices);

// EXAMPLE

export const exampleEmailItem = mapEmailServices['Mailgun']?.url;  // Access a property
