import time

"""
예측되는 방송 시간 계산
"""
def calculate_broadcast_time(
        sample_time: float, music_list: list, break_time: int, script: str
) -> float:
    # 단어당 말하기 속도 계산
    # TODO 단어 수 바꾸기
    sample_words = 10
    speed = round((sample_time/sample_words), 2)

    # 스크립트 단어수 계산
    script = script.replace("\n", "")
    words = len(script.split(" "))

    # 스크립트 읽는 속도 계산
    reading_time = words * speed

    # 음악 감상 시간 계산
    music_time = sum(music_list)
    music_time += break_time * (len(music_list) * 2)

    return reading_time + music_time
