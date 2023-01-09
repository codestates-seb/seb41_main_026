package back.domain.enums;


import com.fasterxml.jackson.annotation.JsonFormat;

@JsonFormat(shape = JsonFormat.Shape.OBJECT)
public enum Tag {

    Spring("봄"),
    Summer("여름"),
    Autumn("가을"),
    Winter("겨울"),
    Paju("파주"),
    Masan("마산"),
    Sokcho("속초"),
    Hapcheon("합천"),
    Gumi("구미"),
    Daegu("대구"),
    Changwon("창원"),
    Andong("안동"),
    Gyeongju("경주"),
    Pohang("포항"),
    Busan("부산"),
    Seoul("서울"),
    ChoiJinWoo("최진우"),
    KimDongHyun("김동현"),
    LeeDongGuk("이동국"),
    KimWonDo("김원도"),
    ChoiYunJeong("최윤정"),
    YooSeongMin("유성민");


    final private String category;
    private Tag(String category) {
        this.category = category;
    }

    public String getCategory() {
        return category;
    }
    public static Tag nameOf(String category) {
        for (Tag tags : Tag.values()) {
            if (tags.getCategory().equals(category)) {
                return tags;
            }
        }
        return null;
    }
}
