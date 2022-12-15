import ujson
from typing import Dict

from calculator import calculate_broadcast_time


def get_sqs_message(event) -> Dict:
    if "Records" in event:
        for record in event["Records"]:
            if "body" in record:
                message = record["body"]
                yield ujson.loads(message)
    return {}


def lambda_handler(event, context):
    message = get_sqs_message(event)
    total_time = calculate_broadcast_time(
        message["sample_time"],
        message["music_list"],
        message["break_time"],
        message["script"]
    )

    return {"result": total_time, "statusCode": 200}
