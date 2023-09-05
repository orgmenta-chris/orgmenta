// Roadmap
const checklist = [
  {
    title: "Add Documentation and Comments",
    description:
      "1. Provide comprehensive inline comments to explain the purpose and functionality of each function, interface, and component in the module. This will make it easier for users to understand how to use your library.\n2. Add a high-level overview comment at the top of the module to describe its purpose, usage, and any prerequisites.",
  },
  {
    title: "Unit Tests",
    description:
      "Write comprehensive unit tests for each function and component within the module:\n1. Test different scenarios and edge cases to ensure the reliability and correctness of your library.",
  },
  {
    title: "Error Handling",
    description:
      "Enhance error handling:\n1. Add detailed error messages and handle different error scenarios that might arise during authentication, signing in, or signing out.",
  },
  {
    title: "Consistent Styling",
    description:
      "Ensure consistent coding style and formatting:\n1. Adhere to a consistent coding style and formatting to improve code readability and maintainability.",
  },
  {
    title: "API Documentation",
    description:
      "Create clear and comprehensive API documentation:\n1. Include usage examples, explanations of function parameters, return values, and usage patterns.",
  },
  {
    title: "Type Annotations",
    description:
      "Add TypeScript type annotations:\n1. Ensure type safety and improved developer experience by adding TypeScript type annotations to your module's code.",
  },
  {
    title: "Versioning and Changelog",
    description:
      "Implement versioning and maintain a changelog:\n1. Use tools like Semantic Versioning (SemVer) for versioning.\n2. Keep a changelog highlighting changes and updates made in each release.",
  },
  {
    title: "Publishing Considerations",
    description:
      "Considerations for publishing your library:\n1. Ensure the package name adheres to npm's naming guidelines and is available.\n2. Double-check package metadata like package.json for author, description, license, and repository.",
  },
  {
    title: "Webpack Configuration (if applicable)",
    description:
      "Configure webpack for multi-platform support:\n1. If publishing for both react-native and react-native-web, set up the build process to target both platforms using conditional imports or platform-specific code.",
  },
  {
    title: "License",
    description:
      "Choose an appropriate open-source license for your library and include the license information in your package.",
  },
  {
    title: "Publish to documentation Website",
    description: "",
  },
  {
    title: "Continuous Integration (CI) and Automated Testing",
    description:
      "Set up a CI/CD pipeline to automate testing and deployment processes. This ensures that your library is continuously tested against different scenarios and platforms.",
  },
  {
    title: "Code Coverage",
    description:
      "Monitor and maintain code coverage metrics to ensure that your unit tests effectively cover your codebase.",
  },
  {
    title: "Performance Optimization",
    description:
      "Optimize the performance of your library by identifying and addressing bottlenecks, reducing unnecessary operations, and improving efficiency.",
  },
  {
    title: "Accessibility",
    description:
      "Ensure that your library's components and user interfaces are accessible to users with disabilities by following best practices for accessibility.",
  },
  {
    title: "Dependency Management",
    description:
      "Carefully manage dependencies and keep them up-to-date. Regularly review and update dependencies to ensure security and compatibility.",
  },
  {
    title: "Contributor Guidelines",
    description:
      "Provide clear guidelines for potential contributors on how to contribute to your project. This includes coding standards, pull request guidelines, and contribution workflows.",
  },
  {
    title: "Security Review",
    description:
      "Conduct a security review of your codebase to identify and address potential security vulnerabilities.",
  },
  {
    title: "Performance Benchmarking",
    description:
      "Benchmark your library's performance against common usage scenarios to ensure that it meets acceptable performance standards.",
  },
];

const features = [
  {
    title: "Implement the Signup Functionality",
    description:
      "Complete the implementation of the signup functionality:\n1. Defined the interface and placeholders for the signup related functions, but the actual logic is missing.\n2. Implement the requestAuthSignup and useAuthSignup functions according to your library's requirements.",
  },
  {
    title: "Change Password Functionality",
    description:
      "Implement a function that allows users to change their passwords after signing in.",
  },
  {
    title: "Password Recovery (Forgot Password) Functionality",
    description:
      "Provide a function for users to recover their passwords through a password reset process. This involves sending password reset emails and allowing users to set a new password.",
  },
  {
    title: "Social Authentication",
    description:
      "Include functions for authenticating users using popular social media platforms like Google, Facebook, Twitter, etc.",
  },
  {
    title: "Multi-Factor Authentication (MFA)",
    description:
      "Implement support for multi-factor authentication to enhance security by adding an extra layer of verification.",
  },
  {
    title: "Account Deactivation and Removal",
    description:
      "Provide functions to allow users to deactivate or delete their accounts.",
  },
  {
    title: "Account Verification and Email Confirmation",
    description:
      "Implement functions to send verification emails and confirm user email addresses.",
  },
  {
    title: "User Profile Management",
    description:
      "Include functions to update user profile information, such as profile picture, display name, and other relevant details.",
  },
  {
    title: "Session Management",
    description:
      "Enhance session management by adding functions to check and refresh authentication tokens.",
  },
  {
    title: "Role-Based Access Control (RBAC)",
    description:
      "If applicable, include functions to manage user roles and permissions for different parts of the application.",
  },
  {
    title: "Security Enhancements",
    description:
      "Implement security features like brute-force protection, account lockout mechanisms, and IP blocking.",
  },
  {
    title: "Event Hooks and Customization",
    description:
      "Provide hooks and customization options to allow developers to integrate the authentication package seamlessly into their applications.",
  },
  {
    title: "Localization and Internationalization",
    description:
      "Support different languages and regions by including features for localization and internationalization.",
  },
  {
    title: "Account Linking",
    description:
      "Allow users to link multiple authentication methods to their account, such as email and social media accounts.",
  },
  {
    title: "OAuth and OpenID Connect Integration",
    description:
      "Integrate with OAuth and OpenID Connect providers for broader authentication options.",
  },
  {
    title: "Analytics and Monitoring",
    description:
      "Include features to track authentication-related events and provide monitoring capabilities.",
  },
  {
    title: "Password Complexity and Policies",
    description:
      "Provide options for setting and enforcing password complexity rules and policies.",
  },
  {
    title: "OAuth2 / OIDC Server (for Advanced Use Cases)",
    description:
      "If your package aims to cover advanced use cases, consider offering OAuth2 or OpenID Connect server capabilities.",
  },
];

const workflow = `Workflow for implementing a feature

requirements
- break down into subtasks until you reach an achievable deliverable
- list all of the 'user actions' /'user stories', along with how many maximum clicks (and other requirements) are needed
- prioritise all tasks

planning
- design/collaborate on what is needed for each of the below categories (e.g. what client side functions are needed, what attributes, etc.)

Db table / view changes
- (as few as possible - keep it dynamic)

Db row level security changes
- (as few as possible - keep it dynamic)

supabase / postgresql function changes
- e.g. for space creation v2, we want to create unique entities/rel/attribute tables for each space (then add appropriate row level security policies) (and then v3 would allow self hosting / separate supabase dbs / etc.

supabase edge / server functions

chron jobs etc.

integrations
- third party integration changes/additions
- associated functions to save/replicate/sync the data

client side functions

client side ui

attributes (/properties/schema)
- any new relationships/attributes/properties that will be needed (e.g. if implementing invoicing, need a 'line item of invoice' relationship

entities+rels
- create an area (and link it to anything relevant) if needed (e.g. 'invoicing')
- create templates/rules and link it to the area
- create any reference items (information, guides etc.)
- create items (tools etc.)
-... etc.
`;
