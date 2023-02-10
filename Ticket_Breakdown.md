# Agent Report Generation

### 1. Add the ability for Facilities to save custom ids for Agents:
##### Acceptance criteria:
- A new field for custom Agent id should be added to the Agent table in the database
- The custom id should be unique for each Agent within a single Facility
- A UI should be created for Facilities to enter and edit custom ids for Agents
##### Time/effort estimate: 3-4 hours
##### Implementation details:
- Create a new column in the Agent table in the database to store the custom id
- Create a UI for Facilities to enter and edit custom ids for Agents, ensuring that the custom id entered is unique for each Agent within a single Facility
### 2. Use custom id in report generation:
##### Acceptance criteria:
The custom id of each Agent should be used in the reports generated by the generateReport function instead of their internal database id
##### Time/effort estimate: 3-4 hours
##### Implementation details:
Modify the generateReport function to use the custom id of each Agent instead of their internal database id when generating the reports
### 3. Update getShiftsByFacility function to include custom id:
##### Acceptance criteria:
- The getShiftsByFacility function should include the custom id of each Agent in the list of Shifts worked that quarter returned by the function
##### Time/effort estimate: 1-2 hours
##### Implementation details:
- Modify the getShiftsByFacility function to include the custom id of each Agent in the list of Shifts worked that quarter returned by the function
### 4. Test the changes:
##### Acceptance criteria:
- Verify that the changes made in the previous tickets work as expected and the reports generated correctly display the custom ids of each Agent instead of their internal database id.

##### Time/effort estimate: 1-2 hours
##### Implementation details:
- Perform various tests to ensure that the changes made in the previous tickets work as expected and the reports generated correctly display the custom ids of each Agent instead of their internal database id. This includes testing different scenarios, such as updating the custom id of an Agent and ensuring that the reports are generated correctly, and ensuring that the custom ids entered are unique for each Agent within a single Facility.
### 5. Documentation:
##### Acceptance criteria:
- Update relevant documentation to reflect the changes made to the system.
##### Time/effort estimate: 1 hour
##### Implementation details:
- Update the project documentation to reflect the changes made to the system, including the addition of the custom id field for Agents and the use of custom ids in report generation.