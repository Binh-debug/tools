export function groupKeywords1(keywords: any) {
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

    if (group.length > 1) {
      // Chỉ thêm nhóm nếu có hơn một mảng (tức là tìm thấy trùng lặp)
      groups.push(group);
    }
  }

  return groups;
}
