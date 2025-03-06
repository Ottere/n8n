function createPushMessage(data) {
  // 혹시 해당 필드가 없을 경우를 대비해 안전하게 처리
  const repoName = data?.repository?.name ?? "Unknown Repository";
  const pusherName = data?.pusher?.name ?? "Unknown User";
  const commitMessage = data?.head_commit?.message ?? "No commit message";
  const repoUrl = data?.repository?.html_url ?? "";

  return `${repoName}
  코드가 푸쉬 되었습니다.
  푸쉬 사용자 : ${pusherName}
  커밋 메시지 : ${commitMessage}
  
  바로가기 : ${repoUrl}`;
}

// createPushMessage에 Webhook 노드에서 넘어온 $json을 전달
const message = createPushMessage($json);

// n8n의 Code 노드는 return할 때 [{ json: { ... } }] 구조여야 다음 노드에서 사용 가능
return [
  {
    json: {
      text: message,
    },
  },
];
