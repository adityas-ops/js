#include <iostream>
#include <vector>
#include <string>
#include <algorithm>

using namespace std;

bool isContain(string s, string search){
    if(s.find(search) != string::npos){
        return true;
    }
    return false;
}

vector<string> result(vector<string>s, string search){
    vector<string>ans;
    for(auto str:s){
        if(isContain(str,search)){
            ans.push_back(str);
        }
    }
    return ans;
}

int main() {
    vector<int> arr = {1,2,4,5,5};
    sort(arr.begin(), arr.end(),greater<int>());
    for(auto i:arr){
        cout<<i<<" ";
    }
    cout<<endl;

    cout<<"maxl: "<<*max_element(arr.begin(),arr.end())<<endl;
    cout<<"minl: "<<*min_element(arr.begin(),arr.end())<<endl;
    return 0;
}