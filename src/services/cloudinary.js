export const uploadImage =
  async (file) => {

    const data =
      new FormData();

    data.append(
      "file",
      file
    );

    data.append(
      "upload_preset",
      "closetiq"
    );

    data.append(
      "cloud_name",
      "dajaloicj"
    );

    const res =
      await fetch(

        "https://api.cloudinary.com/v1_1/dajaloicj/image/upload",

        {

          method: "POST",

          body: data,

        }

      );

    const uploadedImage =
      await res.json();

    return uploadedImage.url;

  };
