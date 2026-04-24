class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length != t.length){
            return false;
        }
        const freq = {};
        for(let i=0;i<s.length;i++){
            const ch = s[i];
            freq[ch] = (freq[ch] || 0)+ 1;
        }
        for(let i=0;i<t.length;i++){
            const ch = t[i];
            if(!freq[ch]){
                return false;
            }
            freq[ch]--;
        }
        return true;
    }
}
