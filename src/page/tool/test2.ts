export function groupKeywords(keywords: any) {
  const groups = [];
  let usedIndices = new Set();

  for (let i = 0; i < keywords.length; i++) {
    if (usedIndices.has(i)) continue; // Bỏ qua nếu mảng này đã được nhóm

    let group = [keywords[i]];
    usedIndices.add(i);

    for (let j = i + 1; j < keywords.length; j++) {
      if (usedIndices.has(j)) continue;

      let commonElements = keywords[i].filter((element: any) =>
        keywords[j].includes(element)
      ).length;

      if (commonElements > 5) {
        group.push(keywords[j]);
        usedIndices.add(j);
      }
    }

    // Luôn thêm nhóm vào kết quả cuối cùng, bất kể số lượng mảng từ khóa trong nhóm
    groups.push(group);
  }

  return groups;
}
