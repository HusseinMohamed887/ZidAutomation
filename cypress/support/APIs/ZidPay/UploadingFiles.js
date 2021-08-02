export const uploadFileRequest = (fileToUpload, uniqueName, aliasName) => {
    const data = new FormData();
  
    data.append("hasHeader", "true");
    data.append("name", uniqueName);
  
    cy.server()
      .route({
        method: "POST",
        url: "/fileUploadEndpoint",
      })
      .as(aliasName)
      .window()
      .then((win) => {
        cy.fixture(fileToUpload, "binary")
          .then((binary) => Cypress.Blob.binaryStringToBlob(binary))
          .then((blob) => {
            const xhr = new win.XMLHttpRequest();
  
            data.set("user-file", blob, fileToUpload);
  
            xhr.open("POST", "/fileUploadEndpoint");
  
            xhr.setRequestHeader("Authorization", `Bearer ${window.testToken}`);
  
            xhr.send(data);
          });
      });
  };