/**
 * This file serves as a mock for static assets (images, videos, fonts, etc.) during tests.
 * Jest does not know how to interpret non-JavaScript files and would throw an error ("Unexpected token") when trying to parse binaries.
 * By replacing the imported images with this simple string, the tests can run without errors.
 */
module.exports = "test-file-stub";
