package org.acme;

import jakarta.ws.rs.FormParam;
import org.jboss.resteasy.reactive.PartType;
import jakarta.ws.rs.core.MediaType;

public class ImageUploadForm {
    @FormParam("file")
    @PartType(MediaType.APPLICATION_OCTET_STREAM)
    public byte[] file;
}
