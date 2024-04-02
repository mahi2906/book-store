# Book Store

## Overview
This project is a (brief description of the project). It includes features such as book purchasing, email notifications, and more.

## Logic for Computing `sellCount`
The `sellCount` attribute represents the total number of times a book has been purchased. It is computed dynamically based on the number of purchase records associated with each book. Whenever a purchase is made, the `sellCount` is updated by querying the purchase history for the specific book and counting the number of purchase records. This ensures that `sellCount` accurately reflects the total sales of each book.

## Mechanism for Sending Email Notifications
Email notifications are sent using Nodemailer, a popular library for sending emails in Node.js applications. The process involves configuring SMTP settings, reading email templates, replacing dynamic content in the templates, and finally sending the email. Here's a brief overview of the mechanism:
1. **Setting up Nodemailer**: Configuring SMTP settings including host, port, username, and password.
2. **Reading Email Templates**: HTML email templates are read from files stored in the project directory.
3. **Replacing Dynamic Content**: Placeholders in the email templates are replaced with actual data (e.g., user names, order details) before sending the email.
4. **Sending Email**: The email, including sender, recipient, subject, HTML content, and any attachments, is sent using the configured SMTP settings.
5. **Handling Errors**: Any errors that occur during the email sending process are logged, and appropriate error handling is implemented.

## Database Design and Implementation Choices
The database design and implementation choices are made with scalability, performance, and data integrity in mind. Some key decisions include:
- **Use of Unique Identifiers**: Unique identifiers such as `bookId`, `userId`, and `purchaseId` are used to ensure data integrity and enable efficient querying.
- **Normalization**: Data is organized into separate tables with relationships defined using foreign keys to avoid data redundancy and improve maintainability.
- **Indexes**: Indexes are created on frequently queried columns to improve query performance.
- **Validation**: Data validation is implemented at the database level using Sequelize validation rules to enforce data integrity constraints.
- **Hooks**: Sequelize hooks are used to implement business logic such as updating `sellCount` after a purchase or generating unique IDs before creating records.

## Installation and Usage
Include instructions on how to install and use the project.

## License
Specify the project's license.

## Credits
Acknowledge any third-party libraries, resources, or individuals that contributed to the project.

