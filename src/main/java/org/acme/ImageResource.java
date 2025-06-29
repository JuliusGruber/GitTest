package org.acme;

import java.io.ByteArrayInputStream;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import org.jboss.resteasy.reactive.multipart.MultipartForm;

import com.drew.imaging.ImageMetadataReader;
import com.drew.metadata.Metadata;
import com.drew.metadata.exif.ExifSubIFDDirectory;

@Path("/upload")
public class ImageResource {

    @POST
    @Consumes(MediaType.MULTIPART_FORM_DATA)
    @Produces(MediaType.APPLICATION_JSON)
    public Map<String, String> upload(@MultipartForm ImageUploadForm form) throws Exception {
        Metadata metadata = ImageMetadataReader.readMetadata(new ByteArrayInputStream(form.file));
        ExifSubIFDDirectory directory = metadata.getFirstDirectoryOfType(ExifSubIFDDirectory.class);
        Date date = directory != null ? directory.getDateOriginal() : null;
        String formatted = date != null ? new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(date) : "Unknown";
        Map<String, String> response = new HashMap<>();
        response.put("date", formatted);
        return response;
    }
}
