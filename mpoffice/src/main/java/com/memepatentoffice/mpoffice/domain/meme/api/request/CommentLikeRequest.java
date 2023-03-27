package com.memepatentoffice.mpoffice.domain.meme.api.request;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Getter
@AllArgsConstructor
@Builder
public class CommentLikeRequest {
    private Long commentId;
    private Long userId;

    public CommentLikeRequest() {
    }
}
